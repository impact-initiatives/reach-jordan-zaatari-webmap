const { mapboxgl } = window;

export default function ({ map }) {
  map.on('click', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['health-facilities-fill'],
    });
    if (features.length && features[0].properties.Summary_St !== 'null') {
      const feature = features[0];
      new mapboxgl.Popup({ closeButton: false })
        .setLngLat(map.unproject(e.point))
        .setHTML(`
          <p>${feature.properties.Name_EN} / ${feature.properties.Name_AR}</p>
          <p>Hours: ${feature.properties.Health_Hrs}</p>
          <p>Services: ${feature.properties.Summary_St}</p>
        `)
        .addTo(map);
    }
  });
  map.on('mousemove', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['health-facilities-fill'],
    });
    const canvas = map.getCanvas();
    canvas.style.cursor = (
      features.length && features[0].properties.Summary_St !== 'null') ? 'pointer' : '';
  });
}
