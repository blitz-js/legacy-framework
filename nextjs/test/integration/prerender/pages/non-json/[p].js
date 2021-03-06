import { useRouter } from 'next/router'

export async function getStaticProps() {
  return {
    props: { time: new Date() },
  }
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

const Page = ({ time }) => {
  const { isFallback } = useRouter()

  if (isFallback) return null

  return <p className="data">timestring: {time.toISOString()}</p>
}

export default Page
