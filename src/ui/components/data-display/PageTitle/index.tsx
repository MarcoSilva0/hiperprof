import {
  PageSubitleStyled,
  PageTitleContainer,
  PageTitleStyled,
} from "./styles";

export interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled color={'primary'}>{title}</PageTitleStyled>
      <PageSubitleStyled>{subtitle}</PageSubitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
