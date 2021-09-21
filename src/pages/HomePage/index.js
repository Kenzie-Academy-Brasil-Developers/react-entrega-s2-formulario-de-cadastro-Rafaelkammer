import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Stack, Alert, AlertTitle, Button } from "@material-ui/core/";

function HomePage() {
  const params = useParams();
  const history = useHistory();

  const handleButton = () => {
    history.push(`/`);
  };

  return (
    <>
      <Stack sx={{ width: "50%" }} spacing={2}>
        <Alert severity="success">
          <AlertTitle>Cadastrado com sucesso!</AlertTitle>
          Usuário <strong>{params.user}</strong> cadastrado com sucesso!
        </Alert>
      </Stack>
      <div className="buttonContainer">
        <Button onClick={handleButton} variant="contained" color="secondary">
          Voltar
        </Button>
      </div>
    </>
  );
}
export default HomePage;
