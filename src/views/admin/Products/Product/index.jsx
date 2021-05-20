import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { useHistory, useLocation } from "react-router-dom";

import "./styles.scss";

import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from "reactstrap";

import Page from "components/Page";
import api from "config/api";
import errorRequest from "common/errorRequest";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Product() {
  const history = useHistory();
  const query = useQuery();
  const idProduct = query.get("idProduct");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState({});
  const [deletedImage, setDeletedImage] = useState(false);
  const [price, setPrice ] = useState("");
  const [quantity, setQuantity] = useState(1);

  async function addImage(event) {
    event.preventDefault();
    if (!event.target.files || !event.target.files.length) return;

    let file = event.target.files[0];

    setImage({
      name: file.name,
      file,
      urlImage: URL.createObjectURL(file),
    });
  }

  async function deleteImage(event) {
    event.preventDefault();

    Swal.fire({
      title: "Atenção",
      text: "Deseja realmente excluir essa imagem?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim!",
    }).then(async (result) => {
      if (result.value) {
        setImage({});
        setDeletedImage(true);
        document.getElementById("product-image").value = "";
      }
    });
  }

  useEffect(() => {
    if (idProduct)
      fetchProduct();
  }, []);

  async function fetchProduct() {
    setLoading(true);
    try {
      const { data } = await api.get(`/produtos/${idProduct}`);

      setName(data.nome);
      setQuantity(data.quantidadeEstoque);
      setPrice(data.valorUnitario);
    } catch (error) {
      errorRequest(history, error);
    }
    setLoading(false);
  }

  async function saveProduct(event) {
    event.preventDefault();
    if (!name || !price || !quantity) {
      Swal.fire('Atenção!', 'O nome do produto, a quantidade e o preço são obrigatórios, verifique!', 'warning')
      return;
    }

    setLoading(true);
    try {
      const data = {
        nome: name,
        quantidadeEstoque: quantity,
        valorUnitario: price
      }

      if (idProduct){
        data.codigo = idProduct;
        await api.put(`/produtos`, data);
      }
      else
        await api.post(`/produtos`, data);

      Swal.fire('Sucesso!', 'O produto foi alterado com sucesso!', 'success');
      history.push("/admin/products")

    } catch (error) {
      errorRequest(history, error);
    }
    setLoading(false);
  }

  async function changeQuantity(value){
    if (value < 1)
      setQuantity(1);
    else
      setQuantity(value);
  }

  return (
    <Page loading={loading}>
      <>
        <button className="button-like-link" onClick={() => history.goBack()}>
          <i className="fa fa-arrow-left" /> Voltar
        </button>
      </>
      <>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup className="mb-1">
                <Label className="form-label" for="inputName">
                  Nome
                </Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="far fa-user" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="form-input"
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col className="col-6">
              <span className="mt-3 home-title-adm mb-3">
                Imagem de perfil:
              </span>
              <Row>
                <Col className="d-flex">
                  <div className="user-profile-preview-image mr-3">
                    {
                      image.urlImage &&
                      <span
                        className="user-profile-preview-image-delete"
                        onClick={(e) => deleteImage(e)}
                      >
                        <i className="fas fa-times" />
                      </span>
                    }
                    {
                      image.urlImage &&
                      <div className="table-image-product">
                        <img alt="imagem enviada" className="image-product" src={image.urlImage} />
                      </div>
                    }
                  </div>
                  <div className="user-profile-image mt-4 mb-2">
                    <input
                      id="product-image"
                      type="file"
                      onChange={(e) => addImage(e, true)}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
          <Col md="3">
              <FormGroup className="mb-1">
                <Label className="form-label" for="inputName">
                  Preço
                </Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-dollar-sign" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="form-input"
                    type="text"
                    placeholder="Preço"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup className="mb-1">
                <Label className="form-label" for="inputNumber">
                Qtd.
                    </Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>₁₂₃</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="form-input"
                    type="number"
                    id="inputNumber"
                    placeholder="Qtd."
                    value={quantity}
                    onChange={(e) => changeQuantity(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
           
          </Row>
          <Button
            className="float-right mt-3"
            color="primary"
            onClick={(e) => saveProduct(e)}
          >
            Salvar
          </Button>
        </Form>
      </>
    </Page>
  );
}
