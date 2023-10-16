import PageTitle from "@components/data-display/PageTitle";
import { TextField, Icon, Button } from "@mui/material";
import { BoxButton, HomeContainer } from "@styles/pages/index.styles";

export default function Home() {
  return (
    <HomeContainer>
      <PageTitle
        title="Encontre o professor ideal para você!"
        subtitle="pesquise pelo professor ideal para você"
      />
      <TextField
        sx={{ mt: 3, mb: 1 }}
        label="Encontre um professor"
        InputProps={{
          startAdornment: <Icon>search</Icon>,
        }}
        fullWidth
        required
      />
      <BoxButton>
        <Button type="submit" variant="contained">
          Buscar por professor perfeito
        </Button>
      </BoxButton>
    </HomeContainer>
  );
}
