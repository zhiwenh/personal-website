import './../App.css';

export default function BlockchainExperience(
  {blockchainExperienceListItem, blockchainExperienceItemSummary}
) {
  return (
    <div className="blockchain-experience">
      <div className="blockchain-experience-list-item">
        {blockchainExperienceListItem}
      </div>
      <div className="blockchain-experience-item-summary">
        {blockchainExperienceItemSummary}
      </div>
    </div>
  )
}
