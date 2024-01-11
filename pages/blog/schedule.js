<<<<<<< HEAD
<<<<<<< HEAD
import { client } from 'lib/api'

export default function Schedule () {
  return <h1>記事のタイトル</h1>
=======
import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
      <h1>記事のタイトル</h1>
    </Container>
  )
>>>>>>> chapter8
=======
import { getPostBySlug } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'components/two-column'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import Image from 'next/image'

const Schedule = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description
}) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />

        <figure>
          <Image
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            sizes='(min-width: 1152px) 1152px, 100vw'
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
>>>>>>> chapter8
}
export default Schedule

export async function getStaticProps () {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)
<<<<<<< HEAD
=======
  const description = extractText(post.content)
>>>>>>> chapter8
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
<<<<<<< HEAD
      categories: post.categories
=======
      categories: post.categories,
      description: description
>>>>>>> chapter8
    }
  }
}
