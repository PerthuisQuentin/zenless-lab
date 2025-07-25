import Image from 'next/image';

import { FactionId } from '@/faction/data/faction.type';
import { getFactionIconUrl } from '@/faction/data/factions.data';

type FactionIconProps = {
    readonly factionId: FactionId;
};

export default function FactionIcon({ factionId }: FactionIconProps) {
    return (
        <Image
            src={getFactionIconUrl(factionId)}
            fill={true}
            alt={`Faction icon for ${factionId}`}
        />
    );
}