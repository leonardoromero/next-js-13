type PostsPageProps = {
  params: string[]
}

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  )
}

export default async function PostsPage({ params }: PostsPageProps) {
	const posts = await fetchPosts()

	return <section>
		{}
	</section>
}
