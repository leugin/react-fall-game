import Head from 'next/head'
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TopBard from '../shared/components/TopBard';
import Rooms from '../shared/components/Rooms';
import PlayGround from '../shared/components/Playground';

export default function Home() {

    return (
        <div  >
            <Head>
                <title>Caida</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Rooms/>
                <PlayGround/>
            </main>

            <footer>

            </footer>

            <style jsx>{`
       
      `}</style>

            <style jsx global>{`
 
      `}</style>
        </div>
    )
}
