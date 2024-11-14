import Extent from '@arcgis/core/geometry/Extent';
import { useState } from 'react';

export const utahMercatorExtent = new Extent({
  xmax: -12612006,
  xmin: -12246370,
  ymax: 5125456,
  ymin: 4473357,
  spatialReference: { wkid: 3857 },
});

export const useDefaultExtent = (
  view: __esri.MapView | null,
  initialExtent: Extent = utahMercatorExtent,
) => {
  const [defaultExtent] = useState(initialExtent);

  const goHome = (extent: Extent = defaultExtent) => {
    if (!view) {
      return;
    }

    view.when(() => {
      view.goTo(extent);
    });
  };

  return goHome;
};