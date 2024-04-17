import ids from './ids';
export default function Index({ posts, globalData }) {
  return (
    <div>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <a
              target="_blank"
              href={`https://ai.feishu.cn/lingo/detail/${id}`}
            >{`https://ai.feishu.cn/lingo/detail/${id}`}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function getStaticProps() {
  return { props: {} };
}
