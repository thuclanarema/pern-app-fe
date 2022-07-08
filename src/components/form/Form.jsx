import {
  Form,
  FormLayout,
  Banner,
  TextField,
  Card,
  Button,
} from "@shopify/polaris";
import DropZoneWithImageFileUpload from "./../dropzone/DropZone";
import { useState, useCallback } from "react";

function FormOnSubmitExample() {
  const [title, SetTitle] = useState("title");
  const [price, setPrice] = useState("0");
  const [amount, setAmount] = useState("");

  const handlePriceChange = useCallback((value) => setPrice(value), []);
  const handleTitleChange = useCallback((value) => SetTitle(value), []);
  const handleAmountChange = useCallback((value) => setAmount(value), []);

  const handleSubmit = useCallback((_event) => {
    // setEmail("");
    // setNewsletter(false);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          autoComplete="off"
        />

        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={handlePriceChange}
          prefix="$"
          autoComplete="off"
        />

        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          autoComplete="off"
        />
        <Card>
          <Banner title="upload image" onDismiss={() => {}}>
            <DropZoneWithImageFileUpload />
          </Banner>
          <Banner title="upload images" onDismiss={() => {}}>
            <DropZoneWithImageFileUpload />
          </Banner>
        </Card>
      </FormLayout>
    </Form>
  );
}

export default FormOnSubmitExample;
