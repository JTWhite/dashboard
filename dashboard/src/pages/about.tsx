import { Inter } from 'next/font/google'
import React, { Fragment } from "react";

import Layout from '@/components/layout';
import User from '@/components/user';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Layout >
        <Header heading="About" />
            <User name="This is about" />
        </Layout>
    </>
  )
}