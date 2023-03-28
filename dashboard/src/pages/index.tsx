import { Inter } from 'next/font/google'

import Header from '@/components/header';
import Layout from '@/components/layout';
import User from '../components/user';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Layout >
            <Header heading="Integrity Analytics" />
            <User name="John Doe" />
            <User name="John Doe" />
            <User name="John Doe" />
            <User name="John Doe" />
            <User name="John Doe" />
            <User name="John Doe" />
            <User name="John Doe" />
            <User name="John Doe" />
            <User name="John Doe" />
   
        </Layout>
    </>
  )
}
