import Head from 'next/head'
import Image from 'next/image'

const about = () => {

    return (
        <div>
            <Head>
                <title>About</title>
            </Head>

            <h1>About</h1>

            <Image
                  src="/images/profile.jpg"
                  height={200}
                  width={200}
                  alt={"Photo of Griff Jones"}
                />

            <p>This site has been created by Griff Jones, who is an aspiring software developer and a keen guitarist.</p>
            <p>There's a photo of him above this text.</p>

        </div>
    )
}

export default about