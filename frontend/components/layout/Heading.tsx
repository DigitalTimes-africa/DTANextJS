import Head from 'next/head'

interface Props {
  title: string;
  name: string;
  content: string;
}

export default function Heading({ title, name, content }: Props){
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name={name} content={content} />
        </Head>
      </div>
    )
}
