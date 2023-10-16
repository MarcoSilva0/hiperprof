import PageTitle from "@components/data-display/PageTitle";
import useIndex from "@data/hooks/pages/useIndex";
import { TextField, Icon, Button } from "@mui/material";
import { BoxButton, HomeContainer } from "@styles/pages/index.styles";

export default function Home() {
  const {setSearch, msgError ,handleSearchTeacher} = useIndex();

  return (
    <HomeContainer onSubmit={handleSearchTeacher}>
      <PageTitle
        title="Encontre o professor ideal para você!"
        subtitle="pesquise pelo professor ideal para você"
      />
      <TextField
        sx={{ mt: 3, mb: 1 }}
        label="Encontre um professor"
        error={msgError.length > 0}
        helperText={msgError}
        InputProps={{
          startAdornment: <Icon sx={{mr: 1}}>search</Icon>,
        }}
        onChange={({target: {value}}) => setSearch(value)}
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
