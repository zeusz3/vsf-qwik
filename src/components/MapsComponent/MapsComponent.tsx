import { component$, useStylesScoped$, $, useOnWindow, useContext } from '@qwik.dev/core';
import styles from './MapsComponent.css?inline';
import { APP_STATE } from '~/constants';

interface PacketaBranch {
	carrier: string;
	city: string;
	country: string;
	error: string | null;
	externalId: string;
	id: string;
	company: string;
	name: string;
	nameStreet: string;
	place: string;
	street: string;
	url: string;
	branchCode: string;
	warning: string | null;
	zip: string;
	showModal: boolean;
}

interface ChildProps {
	store: PacketaBranch; // Reference to the parent's store
}

export const MapsComponent = component$((props: ChildProps) => {
	useStylesScoped$(styles);
	const appState = useContext(APP_STATE);

	// Handle "message" events dynamically
	useOnWindow(
		'message',
		$((event: MessageEvent) => {
			// Check the event and process accordingly
			if (event.data && event.data.packetaSelectedData) {
				const pickupPoint = event.data;
				console.log('Received Pickup Point:', pickupPoint);
				props.store.branchCode = pickupPoint.packetaSelectedData.branchCode;
				props.store.city = pickupPoint.packetaSelectedData.city;
				props.store.country = pickupPoint.packetaSelectedData.country;
				props.store.error = pickupPoint.packetaSelectedData.error;
				props.store.externalId = pickupPoint.packetaSelectedData.externalId;
				props.store.id = pickupPoint.packetaSelectedData.id;
				props.store.name = pickupPoint.packetaSelectedData.name;
				props.store.nameStreet = pickupPoint.packetaSelectedData.nameStreet;
				props.store.place = pickupPoint.packetaSelectedData.place;
				props.store.street = pickupPoint.packetaSelectedData.street;
				props.store.url = pickupPoint.packetaSelectedData.url;
				props.store.warning = pickupPoint.packetaSelectedData.warning;
				props.store.zip = pickupPoint.packetaSelectedData.zip;
				appState.shippingAddress = {
					city: pickupPoint.packetaSelectedData.city ?? '',
					company: pickupPoint.packetaSelectedData.branchCode ?? '',
					countryCode: pickupPoint.packetaSelectedData.country.toUpperCase() ?? '',
					fullName: pickupPoint.packetaSelectedData.name ?? '',
					postalCode: pickupPoint.packetaSelectedData.zip ?? '',
					province: pickupPoint.packetaSelectedData.city ?? '',
					phoneNumber: '',
					streetLine1: pickupPoint.packetaSelectedData.street ?? '',
					streetLine2: pickupPoint.packetaSelectedData.url ?? '',
				};
			}
			props.store.showModal = false;
		})
	);

	return (
		<div>
			{props.store.showModal && props.store.carrier === 'GLS' && (
				<div class="modal-overlay">
					<div class="modal-box">
						<button class="close-button" onClick$={() => (props.store.showModal = false)}>
							Close
						</button>
						<iframe
							src={`https://maps.gls-czech.cz/?find=1&ctrcode=${props.store.country}&lng=sk`}
							allow="geolocation"
							class="modal-box__content"
						></iframe>
					</div>
				</div>
			)}

			{props.store.showModal && props.store.carrier === 'PACKETA' && (
				<div class="modal-overlay">
					<div class="modal-box">
						<iframe
							src={`https://widget.packeta.com/v6/#/`}
							sandbox="allow-scripts allow-same-origin"
							class="modal-box__content"
						></iframe>
					</div>
				</div>
			)}
		</div>
	);
});
