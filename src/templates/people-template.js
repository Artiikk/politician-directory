import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    peopleYaml(fields: { slug: { eq: $slug } }) {
      id
      title
      name
      lastname
      cabinet_position
      prev_polit_pos
      is_cabinet
      is_senator
      is_mp
    }
  }
`

const PeoplePage = ({ data: { peopleYaml } }) => (
  <Layout
    pageStyles={{
      background: "#ffffcc",
    }}
  >
    <SEO title="People" />
    <h1
      css={{
        marginTop: 0,
        paddingTop: "6rem",
      }}
    >{`${peopleYaml.title} ${peopleYaml.name} ${peopleYaml.lastname}`}</h1>
    <h3>ตำแหน่งปัจจุบัน:</h3>
    <ul>
      {peopleYaml.cabinet_position.map(position => (
        <li key={position}>{`${position}`}</li>
      ))}
    </ul>
    <h3>ตำแหน่งที่ผ่านมา:</h3>
    <ul>
      {peopleYaml.prev_polit_pos.map(position => (
        <li key={position}>{`${position}`}</li>
      ))}
    </ul>
    <h3>คณะรัฐมนตรี: {`${peopleYaml.is_cabinet ? "ใช่" : "ไม่ใช่"}`}</h3>
    <h3>ส.ว.: {`${peopleYaml.is_senator ? "ใช่" : "ไม่ใช่"}`}</h3>
    <h3>ส.ส.: {`${peopleYaml.is_mp ? "ใช่" : "ไม่ใช่"}`}</h3>
  </Layout>
)

export default PeoplePage
