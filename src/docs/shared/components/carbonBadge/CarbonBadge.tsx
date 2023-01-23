import { useEffect, useState } from 'react';
import { getStorage, setStorage } from '../../helpers';
import './CarbonBadge.scss';

interface CarbonData {
  c: number; // Carbon amount
  p: number; // Percent better
  url: string;
}

interface Props {
  url: string;
}

const CarbonBadge = (props: Props): JSX.Element => {

  const [carbonData, setCarbonData] = useState<CarbonData>();
  const [carbon, setCarbon] = useState<JSX.Element>(<>Measuring CO<sub>2</sub>&hellip;</>);

  useEffect(() => {
    const maybeCarbon = getStorage(`carbon-${props.url}`);
    if (maybeCarbon) {
      setCarbonData(JSON.parse(maybeCarbon));
    } else {
      (async () => {
        try {
          const res = await fetch('https://api.websitecarbon.com/b?url=' + encodeURIComponent(props.url));
          const data: CarbonData = await res.json();
          setCarbonData(data);
          setStorage(`carbon-${props.url}`, JSON.stringify(data), 'release');
        } catch(e) {
          setCarbonData(undefined);
          setCarbon(<>No Result</>);
        }
      })();
    }
  }, [props.url]);

  useEffect(() => {
    if (carbonData) {
      setCarbon(<>{carbonData.c}g of CO<sub>2</sub>/view</>);
    }
  }, [carbonData]);

  return (
    <div className="carbon-badge">
      <div className="carbon-badge-data">
        <span className="carbon-badge-co2">
          { carbon }
        </span>
        <a className="carbon-badge-link" target="_blank" rel="noopener noreferrer" href="https://websitecarbon.com">Website Carbon</a>
      </div>
      <span className="carbon-badge-percent">
        { !(carbonData && carbonData.p) && <>&nbsp;</> }
        { (carbonData && carbonData.p) && <>Cleaner than {carbonData.p}% of pages tested</> }
      </span>
    </div>
  );
}

export default CarbonBadge;