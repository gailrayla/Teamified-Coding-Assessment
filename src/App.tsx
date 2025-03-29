// Font imports
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";

import ContentWidthContainer from "@/components/layout/ContentWidthContainer";

import "./App.css";
import { TransactionList } from "@/components/transaction-list/transaction-list";
import { Toolbar } from "./components/toolbar/Toolbar";
import { useState } from "react";
import { FilterType } from "./types/filters";

/*
  To reference icons:
  
  import checkIcon from "./assets/check-circle-fill.svg";
  import receiptIcon from "./assets/receipt.svg";
  import plusIcon from "./assets/plus.svg";
  import minusIcon from "./assets/minus.svg";

  <img src={receiptIcon} />
*/

const App = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <ContentWidthContainer>
      <main className="content">
        <h1>Thriday Code Challenge</h1>
        <section>
          <Toolbar onFilterChange={setFilter} />
        </section>
        <section>
          <TransactionList filter={filter} />
        </section>
      </main>
    </ContentWidthContainer>
  );
};

export default App;
