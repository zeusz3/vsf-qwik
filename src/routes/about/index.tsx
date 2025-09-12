// routes/about/index.tsx
import { component$, useContext } from '@qwik.dev/core';
import { Link, routeLoader$ } from '@qwik.dev/router';
import { Image } from 'qwik-image';
import { getCollectionBySlug } from '~/providers/shop/collections/collections';

// export const useCollectionLoader = routeLoader$(async () => {
//     return await getCollectionBySlug('about-us');
// });

export default component$(() => {
	// let collection = useCollectionLoader();
	return (
		<>
			<header
				class="about-header"
				style={{
					display: 'flex',
					gap: '16px',
					padding: '22px',
					alignItems: 'center',
					marginBottom: '20px',
				}}
			>
				<div>
					<h1 id="about-title" style={{ fontSize: '1.8rem', margin: 0 }}>
						About Us
					</h1>
					<p class="lead" style={{ margin: '10px 0 22px', color: '#6b6b6b' }}>
						Family & small-batch olive oils from Greece — carefully selected for Slovak tables.
					</p>
				</div>
			</header>

			<article
				class="card"
				style={{
					background: '#fff',
					borderRadius: '10px',
					padding: '22px',
					boxShadow: '0 6px 18px rgba(30,30,30,0.06)',
					marginBottom: '18px',
				}}
			>
				<h2 style={{ marginTop: 0 }}>Our Mission</h2>
				<p>
					<strong>Bring small‑batch, family-produced Greek olive oils to your homes</strong> —
					directly from the families who nurture, press, and bottle each harvest with care.
				</p>
			</article>

			<hr style={{ border: 0, borderTop: '1px solid #efe7d8', margin: '20px 0' }} />

			<article
				class="card"
				style={{
					background: '#fff',
					borderRadius: '10px',
					padding: '22px',
					boxShadow: '0 6px 18px rgba(30,30,30,0.06)',
					marginBottom: '18px',
				}}
			>
				<h2>Our Belief</h2>
				<p style={{ color: '#6b6b6b' }}>
					Consumers deserve to know exactly where their food comes from. That’s why every product
					page includes the producer’s story, grove location, harvest year and tasting notes.
				</p>

				<div
					class="features"
					style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '10px' }}
				>
					<div
						class="feature"
						style={{
							background: '#fff',
							borderRadius: '8px',
							padding: '12px',
							flex: '1',
							minWidth: '200px',
							boxShadow: '0 4px 10px rgba(20,20,20,0.04)',
						}}
					>
						<strong>Transparency</strong>
						<div style={{ color: '#6b6b6b' }}>
							Origin, harvest year and flavor profile for every bottle.
						</div>
					</div>

					<div
						class="feature"
						style={{
							background: '#fff',
							borderRadius: '8px',
							padding: '12px',
							flex: '1',
							minWidth: '200px',
							boxShadow: '0 4px 10px rgba(20,20,20,0.04)',
						}}
					>
						<strong>Small Batches</strong>
						<div style={{ color: '#6b6b6b' }}>
							Family groves and small presses — each product has a story.
						</div>
					</div>

					<div
						class="feature"
						style={{
							background: '#fff',
							borderRadius: '8px',
							padding: '12px',
							flex: '1',
							minWidth: '200px',
							boxShadow: '0 4px 10px rgba(20,20,20,0.04)',
						}}
					>
						<strong>Curated Selection</strong>
						<div style={{ color: '#6b6b6b' }}>
							Oils chosen to complement local cuisine and premium tastes.
						</div>
					</div>
				</div>
			</article>

			<hr style={{ border: 0, borderTop: '1px solid #efe7d8', margin: '20px 0' }} />

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 50%', gap: '20px' }}>
				<article
					class="card"
					style={{
						background: '#fff',
						borderRadius: '10px',
						padding: '22px',
						boxShadow: '0 6px 18px rgba(30,30,30,0.06)',
						marginBottom: '18px',
					}}
				>
					<h2>Why Shop With Us</h2>
					<p style={{ color: '#6b6b6b' }}>
						We combine deep knowledge of authentic Greek olive oil with years of experience in the
						market. We supply home cooks with premium products backed by attentive customer service
						— so you can buy with confidence.
					</p>

					<h3 style={{ marginTop: '14px' }}>Services</h3>
					<ul style={{ color: '#6b6b6b', paddingLeft: '18px' }}>
						<li>Fast, secure delivery across Slovakia</li>
						<li>
							100% satisfaction guaranteed. If you're not happy with your purchase simply return it,
							no questions asked!
						</li>
						<li>Easy returns and responsive support</li>
					</ul>

					<a
						href="/shop"
						class="cta"
						style={{
							display: 'inline-block',
							background: '#2b6a3e',
							color: '#fff',
							padding: '10px 16px',
							borderRadius: '8px',
							textDecoration: 'none',
							fontWeight: 600,
							marginTop: '8px',
						}}
					>
						Explore the collection
					</a>
				</article>

				<article
					class="card"
					style={{
						background: '#fff',
						borderRadius: '10px',
						padding: '22px',
						boxShadow: '0 6px 18px rgba(30,30,30,0.06)',
						marginBottom: '18px',
					}}
				>
					<h3>Meet the Producers</h3>

					<div
						class="producer"
						style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}
					>
						{/* <img src="/assets/producers/producer1.jpg" alt="Papadopoulos family grove" style={{width: '84px', height: '64px', objectFit: 'cover', borderRadius: '6px'}} /> */}
						<div style={{ fontSize: '0.95rem', color: '#222' }}>
							<strong>Androutsopoulos Family</strong>
							<br />
							Small grove near Kalamata — 60 Koroneiki trees •{' '}
							<span style={{ color: '#6b6b6b' }}>Flavor: fruity, green</span>
						</div>
					</div>

					<div
						class="producer"
						style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}
					>
						{/* <img src="/assets/producers/producer2.jpg" alt="Economou family press" style={{width: '84px', height: '64px', objectFit: 'cover', borderRadius: '6px'}} /> */}
						<div style={{ fontSize: '0.95rem', color: '#222' }}>
							<strong>Devetzoglou Family</strong>
							<br />
							Mill in the Corinth area of Peloponnese — extra virgin, limited release •{' '}
							<span style={{ color: '#6b6b6b' }}>Flavor: herbal, peppery</span>
						</div>
					</div>

					<div style={{ marginTop: '8px' }}>
						<Link
							href="/collections/androutsopoulos/"
							class="cta"
							style={{
								display: 'inline-block',
								background: '#2b6a3e',
								color: '#fff',
								padding: '10px 16px',
								borderRadius: '8px',
								textDecoration: 'none',
								fontWeight: 600,
							}}
						>
							All producers
						</Link>
					</div>
				</article>
			</div>

			<hr style={{ border: 0, borderTop: '1px solid #efe7d8', margin: '20px 0' }} />

			<article
				class="card"
				style={{
					background: '#fff',
					borderRadius: '10px',
					padding: '22px',
					boxShadow: '0 6px 18px rgba(30,30,30,0.06)',
					marginBottom: '18px',
				}}
			>
				<h2>Taste the Story</h2>
				<p style={{ color: '#6b6b6b' }}>
					Try our pairing suggestions: roasted potatoes with a lemon‑herb oil, simple bruschetta to
					showcase a first‑press drizzle, or the right oil for fish and salads. Each recommendation
					notes which oil highlights specific flavors.
				</p>
			</article>

			<footer
				class="card"
				style={{
					background: '#fff',
					borderRadius: '10px',
					padding: '22px',
					boxShadow: '0 6px 18px rgba(30,30,30,0.06)',
				}}
			>
				<p>
					<strong>Want to learn more about a producer or request samples?</strong> Contact us or
					visit the producers section for detailed profiles and photos.
				</p>
				<p style={{ color: '#6b6b6b' }}>
					© <span id="year">{new Date().getFullYear()}</span> Oilios — Family olive oils for Slovak
					tables.
				</p>
			</footer>
		</>
	);
});
