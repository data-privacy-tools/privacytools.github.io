import styled from 'styled-components/macro'
import { Select } from 'antd'

export const StyledOption = styled.span`
	display: flex;
	height: 100%;
	align-items: center;

	img {
		margin-right: 5px;
		border-radius: 20px;
	}

	@media (max-width: 700px) {
		span {
			display: none;
		}
	}
`

export const StyledSelector = styled(Select)`
	background: transparent;
	@media (min-width: 700px) {
		width: 150px;
	}
`
