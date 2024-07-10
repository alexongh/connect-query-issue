"use client"

import styles from "./page.module.css";
import { useQuery } from "@connectrpc/connect-query";
import { view } from "../gen/services/tests/v1/tests-TestService_connectquery"

export default function Home() {

  const data = useQuery(view)

  console.log(data)

  return (
    <main className={styles.main}>
        <h1>H1</h1>
    </main> 
  );
}
