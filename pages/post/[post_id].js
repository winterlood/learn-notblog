export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export function getStaticProps(ctx) {
  const { post_id } = ctx.params;
  return {
    props: {
      post_id,
    },
  };
}

export default function PostDetailPage(props) {
  return <div>Post Detail Page : {props.post_id}</div>;
}
