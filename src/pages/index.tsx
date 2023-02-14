import { fetchTaskContent, TaskContent } from "../lib/tasks";
import { Main } from "views/Main/Main";

export default function Index({ data }: { data: TaskContent[] }) {
  return <Main data={data} />;
}

export async function getStaticProps() {
  const data = await fetchTaskContent();
  return {
    props: {
      data,
    },
  };
}
