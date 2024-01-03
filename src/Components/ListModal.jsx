import cssStyle from '../css/ListModal.module.css';

export default function ListModal({ matchedItems }) {
  return (
    <div className={cssStyle.listmodal}>
      {matchedItems.map((item) => () => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
