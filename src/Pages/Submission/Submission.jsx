import { useParams } from 'react-router-dom'
export default function Submission(){
	const { sub_id } = useParams();
	return(
		<div>
			{sub_id}
		</div>
	);
}