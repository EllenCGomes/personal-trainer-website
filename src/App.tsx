import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Menu,
  Row,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import about from "./assets/about.jpg";
import cover from "./assets/cover.jpg";
import logo from "./assets/logo.png";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: 1,
    label: "HOME",
  },
  {
    key: 2,
    label: "SOBRE",
  },
  {
    key: 3,
    label: "SERVIÇOS",
  },
  {
    key: 4,
    label: "CONTATO",
  },
];

export const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout
      style={{
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        backgroundColor: "transparent",
        minHeight: "100vh",
      }}
    >
      <Header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          backgroundColor: isScrolled ? "rgba(0,0,0,0.4)" : "transparent",
          transition: "background-color 0.3s ease",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
          height: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={logo} width={80} preview={false} />
        </div>

        <Menu
          mode="horizontal"
          items={items}
          defaultSelectedKeys={["1"]}
          style={{
            flex: 1,
            justifyContent: "right",
            background: "transparent",
            color: "white",
            fontWeight: 500,
            fontSize: 14,
            borderBottom: "none",
          }}
        />
      </Header>
      <Content
        style={{
          flex: 1,
          overflow: "visible",
          background: "transparent",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <img
            src={cover}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              filter: "grayscale(30%)",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.75)",
            }}
          />
          <div
            style={{
              position: "absolute",
              zIndex: 2,
              top: "50%",
              left: "5%",
              transform: "translateY(-50%)",
              width: "90%",
              maxWidth: "700px",
            }}
          >
            <Typography.Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: 100,
                textAlign: "left",
                border: "1px solid white",
                padding: 6,
                display: "inline-block",
                marginBottom: 20,
              }}
            >
              PARA MULHERES REAIS, COM RESULTADOS REAIS
            </Typography.Text>
            <Typography.Title
              level={1}
              style={{
                fontSize: "clamp(28px, 6vw, 60px)",
                color: "white",
                fontWeight: 100,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Transforme seu corpo.
            </Typography.Title>
            <Typography.Title
              level={2}
              style={{
                fontSize: "clamp(28px, 6vw, 60px)",
                color: "white",
                fontWeight: 100,
                marginTop: 0,
                lineHeight: 1.2,
              }}
            >
              Supere seus limites
            </Typography.Title>
            <Button
              shape="round"
              size="large"
              type="primary"
              icon={<WhatsAppOutlined />}
              style={{
                fontWeight: 200,
                backgroundColor: "#e9d6ac",
                color: "rgba(0, 0, 0, 0.85)",
              }}
            >
              DESCUBRA COMO
            </Button>
          </div>
        </div>
        <Row
          gutter={[40, 40]}
          style={{
            width: "100%",
            minHeight: "100vh",
            padding: "80px 5%",
            boxSizing: "border-box",
            alignItems: "center",
            margin: 0,
          }}
        >
          <Col
            xs={24}
            md={12}
            style={{
              // display: "flex",
              justifyContent: "right",
              padding: 0,
            }}
          >
            <Typography.Title
              style={{
                fontSize: "clamp(28px, 6vw, 60px)",
                // fontSize: 32,
                fontWeight: 100,
                marginBottom: "40px",
              }}
            >
              Quem sou?
            </Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              aliquet ultrices lacus et imperdiet. Suspendisse ipsum quam,
              fringilla nec sodales ut, semper non augue. Ut elit tellus,
              scelerisque a auctor cursus, consectetur vitae leo. Curabitur eget
              dictum justo. Duis blandit efficitur rutrum. Nulla vitae lacus
              eget turpis sodales scelerisque vitae at massa. Sed at scelerisque
              est. Phasellus et maximus risus, non fringilla erat. Ut et enim
              commodo neque congue vestibulum quis et leo.
            </Typography.Paragraph>
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              display: "flex",
              justifyContent: "right",
              padding: 0,
            }}
          >
            <div
              style={{
                height: "70vh",
                aspectRatio: "1 / 1",
                maxWidth: "100%",
                boxShadow: "8px -8px 0 #d1b66b",
                overflow: "hidden",
              }}
            >
              <img
                src={about}
                alt="Sobre mim"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
            </div>
          </Col>
        </Row>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "#3A3835",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            backgroundColor: "#fff",
            minHeight: "80vh", // altura suficiente para o conteúdo + espaço para sobrepor o footer
            padding: "60px 5%",
            paddingBottom: "160px", // espaço pro form invadir o footer
          }}
        >
          {/* Texto da esquerda */}
          <div style={{ maxWidth: "500px" }}>
            <Typography.Title
              style={{ fontWeight: 100, fontSize: "clamp(28px, 6vw, 60px)" }}
            >
              Contato
            </Typography.Title>
            <Typography.Paragraph>
              Atendimento presencial: Araras - SP
              <br />
              Telefone: (19) 99744-5419
              <br />
              Email: info@universalpreciousmetals.us
            </Typography.Paragraph>
          </div>

          {/* Formulário flutuante */}
          <div
            style={{
              position: "absolute",
              bottom: "-95px", // faz o formulário invadir o Footer
              right: "5%",
              backgroundColor: "#e9d6ac",
              padding: "30px",
              maxWidth: 500,
              width: "50%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              zIndex: 10,
            }}
          >
            <Typography.Text
              strong
              style={{
                fontSize: 14,
                textTransform: "uppercase",
                color: "#1c1c1c",
              }}
            >
              OR FILL IN OUR FORM AND WE WILL REPLY BRIEFLY.
            </Typography.Text>
            <Form layout="vertical" style={{ marginTop: 24 }}>
              <Form.Item label="Nome" name="name" required>
                <Input
                  variant="borderless"
                  style={{
                    borderBottom: "1px solid #c8a650",
                    borderRadius: 0,
                    background: "transparent",
                    padding: 0,
                  }}
                />
              </Form.Item>
              <Form.Item label="Email" name="email" required>
                <Input
                  variant="borderless"
                  style={{
                    borderBottom: "1px solid #c8a650",
                    borderRadius: 0,
                    background: "transparent",
                    padding: 0,
                  }}
                />
              </Form.Item>
              <Form.Item label="Telefone" name="phone">
                <Input
                  variant="borderless"
                  style={{
                    borderBottom: "1px solid #c8a650",
                    borderRadius: 0,
                    background: "transparent",
                    padding: 0,
                  }}
                />
              </Form.Item>
              <Form.Item label="Mensagem" name="message" required>
                <Input.TextArea
                  rows={2}
                  variant="borderless"
                  style={{
                    borderBottom: "1px solid #c8a650",
                    borderRadius: 0,
                    background: "transparent",
                    padding: 0,
                  }}
                />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#1c1c1c",
                  borderColor: "#1c1c1c",
                  color: "#fff",
                  padding: "6px 24px",
                }}
              >
                ENVIAR
              </Button>
            </Form>
          </div>
        </div>
      </Content>
      <Footer
        style={{
          background: "#1c1c1c",
          height: "120px",
          padding: "40px",
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <Button
            size="large"
            type="link"
            icon={<InstagramOutlined />}
            href="https://www.google.com"
            target="_blank"
          />
          <Button
            size="large"
            type="link"
            icon={<FacebookOutlined />}
            href="https://www.google.com"
            target="_blank"
          />
          <Button
            size="large"
            type="link"
            icon={<LinkedinOutlined />}
            href="https://www.google.com"
            target="_blank"
          />
          <p style={{ margin: 0, fontSize: 12, color: "white" }}>
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
