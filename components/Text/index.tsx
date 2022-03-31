import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

export const TextKey = styled.span`
  color: ${(props: any) => props.theme.colors.code.key};
  text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.key};
`;

export const Constant = styled.span`
  color: ${(props: any) => props.theme.colors.code.constant};
  text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.constant};
`;

export const TextVariable = styled.span`
  color: ${(props: any) => props.theme.colors.code.variable};
  text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.variable};
`;

export const TextFunction = styled.span`
  color: ${(props: any) => props.theme.colors.code.function};
  text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.function};
`;

export const Sign = styled.span`
  color: ${(props: any) => props.theme.colors.code.sign};
  text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.sign};
`;

export const TextComponent = styled.span`
  color: ${(props: any) => props.theme.colors.code.component};
  text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.component};
`;

export const TextImport = styled.span`
  color: ${(props: any) => props.theme.colors.code.import};
  text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.import};
`;

export const TextString = styled.span`
  color: ${(props: any) => props.theme.colors.code.string};
  text-shadow: 0 0 6px ${(props: any) => props.theme.colors.code.string};
`;

export const TextShadow = styled(Text)<{ color?: string; isLink?: boolean }>`
  text-shadow: 0 0 6px ${(props: any) => (props.color ? props.color : "white")};
  ${(props: any) =>
    props.isLink &&
    `
       &:hover{
            text-decoration: underline;
            text-decoration-color: #5093CE;
            color: #5093CE;
            text-shadow: 0px 0px 10px #5093ce;
       }
    `};
`;
