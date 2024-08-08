import {SectionNameWrapper} from "./styles";

interface IProps {
    icon?: JSX.Element;
    title: string;
}

export default function SectionName({icon, title}: IProps) {
    return (
        <SectionNameWrapper>
            {icon && <div className='containerIcon'>{icon}</div>}
            <div>
                <p>{title}</p>
            </div>
        </SectionNameWrapper>
    );
}
