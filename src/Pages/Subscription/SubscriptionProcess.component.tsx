import Stepper from "../../Components/Stepper";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import { SubscriptionFormContext } from "../../Utility/useAppContextHook";
import SubscriptionProcessBehaviour from "./SubscriptionProcess.behaviour";

function App() {
  const { formData, setFormData, isLoading, subscriptionPrices, getFinalPrice, stepsData, classes } = SubscriptionProcessBehaviour();

  const footerLeft = (
    <div className={classes.footerLeft}>
      <span>Selected Plan: {`${formData.Duration.Value as string} Months/${formData.Amount.Value as string} GB`}</span>
      <span>Final Price: {`${isLoading ? "Fetching" : "$" + getFinalPrice(formData.Duration.Value as number, formData.Amount.Value as number, subscriptionPrices)}`}</span>
    </div>
  );

  return (
    <Container maxWidth="md">
      <Paper elevation={10} className={classes.root}>
        <SubscriptionFormContext.Provider value={{ formData, setFormData }}>
          <Stepper stepsData={stepsData} stepsLabel={Object.keys(stepsData)} footerLeft={footerLeft} />
        </SubscriptionFormContext.Provider>
      </Paper>
    </Container>
  );
}

export default App;
