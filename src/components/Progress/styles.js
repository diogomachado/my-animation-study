import styled from 'styled-components';

export const Container = styled.View`
    height: 30px;
    width: 280px;
    background: #34495e;
    border-radius: 32px;
`

export const Value = styled.View`
    height: 30px;
    width: ${props => props.width ? props.width : '0'}px;
    background: #95a5a6;
    border-radius: 32px;
`