export interface IElasticClan {
  _source: IClan;
}

export interface IClan {
  tag: string;
  name: string;
  type: string;
  description: string;
  location: Location;
  badgeUrls: BadgeUrls;
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  requiredTrophies: number;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  isWarLogPublic: boolean;
  warLeague: WarLeague;
  members: number;
  memberList: MemberList[];
  labels: Label[];
}

export interface Location {
  id: number;
  name: string;
  isCountry: boolean;
}

export interface BadgeUrls {
  small: string;
  large: string;
  medium: string;
}

export interface WarLeague {
  id: number;
  name: string;
}

export interface IconUrls {
  small: string;
  tiny: string;
  medium: string;
}

export interface League {
  id: number;
  name: string;
  iconUrls: IconUrls;
}

export interface MemberList {
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  league: League;
  trophies: number;
  versusTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
}

export interface IconUrls2 {
  small: string;
  medium: string;
}

export interface Label {
  id: number;
  name: string;
  iconUrls: IconUrls2;
}