import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const apis = [
  "http://datumorphism.com/api/workflows/data-quality-and-summary.json",
  "http://datumorphism.com/api/workflows/eda.json"
]

var RandomEntry = async function(data) {
  console.log(`Show data fetched. Count: ${data.length}`);

  var item = data[Math.floor(Math.random() * data.length)];
  console.log("item: ", item)
  const name = item?.name
  const description = item?.description
  console.log("randomentry:", {
    name: name,
    description: description,
    test: "test"
  })
  return {
    name: name,
    description: description
  };
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

  let item = workflow && workflow[Math.floor(Math.random() * workflow.length)];
  console.log("item: ", item)
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