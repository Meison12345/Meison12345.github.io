document.addEventListener("DOMContentLoaded", function () {
	console.log(1);
	
	async function initMap() {
		// Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
		await ymaps3.ready;

		const {
			YMap,
			YMapDefaultSchemeLayer,
			YMapDefaultFeaturesLayer,
			YMapMarker,
		} = ymaps3;

		// const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

		// Иницилиазируем карту
		const map = new YMap(
			document.querySelector('#map'),
			{
				location: {
					center: [37.584731, 54.200534],
					zoom: 16,
				},
				showScaleInCopyrights: true
			},
			[
				// Добавляем слой для отображения схематической карты
				new YMapDefaultSchemeLayer({}),
				new YMapDefaultFeaturesLayer({}),
			],
		);

		const content = document.createElement('div');
		content.classList.add('circle');

		const marker = new YMapMarker({
			coordinates: [37.584731, 54.200534],
			draggable: false,
			// title: 'North America',
			// popup: { content: 'Greenland is the Largest Island in North America and the World' },
		}, content);





		map.addChild(marker);
	}

	initMap();
});