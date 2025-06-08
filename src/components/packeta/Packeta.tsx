import { component$ } from '@qwik.dev/core';

export default component$(() => {
	return (
		<>
			<iframe
				id="packeta-widget"
				sandbox="allow-scripts allow-same-origin"
				allow="geolocation"
				style={{
					position: 'relative',
					top: '0',
					left: '0',
					width: '100%',
					height: '1000px',
					border: '1px solid #fff',
				}}
				src='https://widget.packeta.com/v6/#/?apiKey=216119fcf2c0c403&amp;language=en&amp;valueFormat="Packeta",id,carrierId,carrierPickupPointId,name,city,street&amp;view=modal&amp;configurator=true'
			></iframe>
		</>
	);
});
