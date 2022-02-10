import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const apis = [
  "http://datumorphism.leima.is/api/workflows/data-quality-and-summary.json",
  "http://datumorphism.leima.is/api/workflows/eda.json"
]

var randomItem = function(workflow) {
  console.log(`Show data fetched. Count: ${workflow}`);

  let item = workflow && workflow[Math.floor(Math.random() * workflow.length)];
  console.log("randomItem item: ", item)
  return item
};

export default function Index() {
  const { query } = useRouter();

  const eda = apis[Math.floor(Math.random() * apis.length)];

  const { data, error } = useSWR(
    eda,
    fetcher
  );
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`

  let name = data?.name;
  let description = data?.description;
  let workflow = data?.workflow;
  console.log("workflow: ", workflow)

  var all = []
  function getAll(obj) {
    all.push(obj)
    if (obj && obj.steps !== undefined) {
      obj.steps.forEach(child => getAll(child))
    }
  }
  workflow && workflow.forEach(c => getAll(c))
  all = all.flat()
  console.log("all: ", all)
  // let item = workflow && workflow[Math.floor(Math.random() * workflow.length)];
  let item = randomItem(all);
  console.log("item in main: ", item)
  const wf_name = item && item?.name
  const wf_description = item && item?.description

  console.log("wf_name", wf_name)
  console.log("wf_description", wf_description)

  if (!data) description = 'Loading...';
  if (error) wf_description = 'Failed to fetch the quote.';

  return (
    <main>
      <div className="center">
        {wf_name && <span className="wf_name">{wf_name}</span>}
        {wf_description && <div className="wf_description">{wf_description}</div>}
      </div>
      <div className="wf">{name}: {description}</div>
      <div className="link">
        <Link href="http://datumorphism.leima.is/awesome/workflows/">
          <a>full workflows</a>
        </Link>
      </div>
      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .step {
          font-family: monospace;
          color: #031704;
          font-size: 24px;
          padding: 1em 0 1em 0;
        }
        .wf {
          font-family: monospace;
          color: #031704;
          font-size: 14px;
          position: absolute;
          top: 1em;
          left: 1em;
        }
        .link {
          font-family: monospace;
          color: #031704;
          font-size: 14px;
          position: absolute;
          bottom: 1em;
          right: 1em;
        }
        .workflow {
          font-family: monospace;
          color: #41443f;
          font-size: 20px;
        }
        .wf_name {
          font-family: monospace;
          color: #41443f;
          font-size: 20px;
        }
        .wf_description {
          font-family: monospace;
          color: #031704;
          font-size: 24px;
          padding: 1em 0 1em 0;
        }
      `}</style>
    </main>
  );
}
