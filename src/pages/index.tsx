import { fetchTaskContent, TaskContent } from "../lib/tasks";

export default function Index({ data }: { data: TaskContent[] }) {
  return (
    <div>
      <img src={data?.[0]?.image} alt="image" />
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchTaskContent();
  return {
    props: {
      data,
    },
  };
}
