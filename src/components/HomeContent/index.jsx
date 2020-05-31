import React from 'react'

import styles from './styles.module.css'

import imageOne from '../../assets/example.png'
import imageTwo from '../../assets/example2.png'
import imageThree from '../../assets/example3.png'

import { Panel } from '../'

import { Button } from '../utils'

export default function HomeContent() {
  return (
    <>
      <Panel transparent>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeader}>LOREM IPSUM DOLOR SIT AMET</h1>
          <div>
            <Button primary width="50%">entrar</Button>
            <Button width="50%">criar conta</Button>
          </div>
        </div>
        <img src={imageOne} alt="imagem" />
      </Panel>
      <Panel>
        <img src={imageTwo} alt="imagem" />
        <section>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
          </p>
        </section>
      </Panel>
      <Panel>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
        </p>
        </section>
        <img src={imageThree} alt="imagem" />
      </Panel>
    </>
  )
}
