import { Companion, Schedule } from "./../../types/agendar";
import CompanionCard from "./CompanionCard";

interface CompanionListProps {
  onSelectCompanion: (companion: Companion) => void;
  selectedCompanion: Companion | null;
  companions: Companion[];
  setSelectedSchedule: React.Dispatch<React.SetStateAction<Schedule | null>>;
}

const CompanionList = ({ onSelectCompanion, selectedCompanion, companions, setSelectedSchedule  }: CompanionListProps) => {
  return (
    <div className="flex flex-wrap gap-5">
      {companions.map((companion) => (
        <CompanionCard 
          key={companion.id}
          companion={companion}
          onSelect={onSelectCompanion}
          isSelected={selectedCompanion?.id === companion.id}
          setSelectedSchedule={setSelectedSchedule}
        />
      ))}
    </div>
  );
};

export default CompanionList;