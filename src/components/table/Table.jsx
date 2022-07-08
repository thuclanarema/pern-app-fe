import {
  IndexTable,
  Card,
  Button,
  useIndexResourceState,
  Stack,
  Modal,
  Thumbnail,
} from "@shopify/polaris";
import { ViewMajor, EditMinor, DeleteMajor } from "@shopify/polaris-icons";
import React, { useState, useEffect } from "react";
import instance from "./../api/api";
import FormOnSubmitExample from "./../form/Form";

function Table() {
  const [products, setProducts] = useState([]);
  const [createForm, setCreateForm] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      await instance
        .get("/products")
        .then((result) => {
          setProducts(result.data.data);
        })
        .catch((error) => console.log("not found"));
    };
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    setCreateForm(!createForm);
  };

  const modalCreateForm = (
    <Modal
      open={createForm}
      onClose={handleAddProduct}
      title="Add Product"
      primaryAction={{
        content: "Add Product",
        onAction: handleAddProduct,
      }}
    >
      <Modal.Section>
        <FormOnSubmitExample />
      </Modal.Section>
    </Modal>
  );

  const handleView = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

  const resourceName = {
    singular: "products",
    plural: "products",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(products);

  const rowMarkup = products.map((item, index) => {
    const { id, title, code, image, price, description, amount } = item;

    // console.log("image", image);

    const images =
      image?.length > 0
        ? image.map((file, index) => (
            <Stack alignment="center" key={index}>
              <Thumbnail size="small" alt="thumbnail" source={file[index]} />
            </Stack>
          ))
        : null;
    // console.log("images", images);
    return (
      <IndexTable.Row
        id={id}
        key={index}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>{code}</IndexTable.Cell>
        <IndexTable.Cell>{images}</IndexTable.Cell>
        <IndexTable.Cell>{price}</IndexTable.Cell>
        <IndexTable.Cell>{description}</IndexTable.Cell>
        <IndexTable.Cell>{amount}</IndexTable.Cell>
        <IndexTable.Cell>
          <Stack>
            <Button icon={ViewMajor} onClick={handleView}></Button>
            <Button primary icon={EditMinor} onClick={handleEdit}></Button>
            <Button
              destructive
              icon={DeleteMajor}
              onClick={handleDelete}
            ></Button>
          </Stack>
        </IndexTable.Cell>
      </IndexTable.Row>
    );
  });

  return (
    <Card title="PRODUCT" sectioned subdued>
      <Button primary onClick={handleAddProduct}>
        Add Product
      </Button>
      <IndexTable
        resourceName={resourceName}
        itemCount={products.length}
        selectedItemsCount={
          allResourcesSelected ? "All" : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          { title: "Title" },
          { title: "Code" },
          { title: "Image" },
          { title: "Price" },
          { title: "Description" },
          { title: "Amount" },
          { title: "Action" },
        ]}
      >
        {rowMarkup}
        {modalCreateForm}
      </IndexTable>
    </Card>
  );
}

export default Table;
