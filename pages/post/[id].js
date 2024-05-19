import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds ,getPostData} from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css'

//会自动匹配当前ID和getStaticPaths返回的ID中 相同的那个
export async function getStaticProps({params}) { 
  const postData = await getPostData(params.id);
  return{
    props:{
      postData
    }
  }
}//getStaticProps is a function that returns an object
//返回所有可能的ID
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export default function Post({postData}){
  return(
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}