"use client"

import ActivityItem from "./ActivityItem";

interface Activity {
  id: string;
  icon: string;
  text: string;
  buttonText: string;
  wage: string;
}

interface ActivityListProps {
  activities: Activity[];
}

export default function ActivityList({ activities }: ActivityListProps) {
  const handleButtonClick = (id: string) => {
    console.log(`Button clicked for activity: ${id}`);
  };

  return (
    <div className="w-full space-y-5 overflow-y-auto h-full">
      {activities.map((activity) => (
        <div key={activity.id} className="w-full mb-5">
          <ActivityItem
            icon={activity.icon}
            text={activity.text}
            buttonText={activity.buttonText}
            wage={activity.wage}
            onButtonClick={() => handleButtonClick(activity.id)}
          />
        </div>
      ))}
    </div>
  );
} 