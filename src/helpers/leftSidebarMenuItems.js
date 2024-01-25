import HomeActiveIcon from "@/assets/icons/homeActive.svg"
import HomePassiveIcon from "@/assets/icons/homePassive.svg"
import ExploreActiveIcon from "@/assets/icons/exploreActive.svg";
import ExplorePassiveIcon from "@/assets/icons/explorePassive.svg";
import NotificationsActiveIcon from "@/assets/icons/notificationsActive.svg";
import NotificationsPassiveIcon from "@/assets/icons/notificationsPassive.svg";
import MessagesActiveIcon from "@/assets/icons/messagesActive.svg";
import MessagesPassiveIcon from "@/assets/icons/messagesPassive.svg";
import ListsActiveIcon from "@/assets/icons/listsActiveIcon.svg";
import ListsPassiveIcon from "@/assets/icons/listsPassiveIcon.svg";
import BookmarksActiveIcon from "@/assets/icons/bookmarksActive.svg";
import BookmarksPassiveIcon from "@/assets/icons/bookmarksPassive.svg";
import CommunitiesActiveIcon from "@/assets/icons/communitiesActive.svg";
import CommunitiesPassiveIcon from "@/assets/icons/communitiesPassive.svg";
import PremiumActiveIcon from "@/assets/icons/premiumActive.svg";
import PremiumPassiveIcon from "@/assets/icons/premiumPassive.svg";

export const leftSidebarMenuItems = [
    {
        path: '/',
        activeIcon: HomeActiveIcon,
        passiveIcon: HomePassiveIcon,
        label: 'Home'
    },
    {
        path: '/explore',
        activeIcon: ExploreActiveIcon,
        passiveIcon: ExplorePassiveIcon,
        label: 'Explore'
    },
    {
        path: '/notifications',
        activeIcon: NotificationsActiveIcon,
        passiveIcon: NotificationsPassiveIcon,
        label: 'Notifications',
        notification: 1,
    },
    {
        path: '/messages',
        activeIcon: MessagesActiveIcon,
        passiveIcon: MessagesPassiveIcon,
        label: "Messages",
    },
    {
        path: '/lists',
        activeIcon: ListsActiveIcon,
        passiveIcon: ListsPassiveIcon,
        label: 'Lists'
    },
    {
        path: '/bookmarks',
        activeIcon: BookmarksActiveIcon,
        passiveIcon: BookmarksPassiveIcon,
        label: 'Bookmarks'
    },
    {
        path: '/communities',
        activeIcon: CommunitiesActiveIcon,
        passiveIcon: CommunitiesPassiveIcon,
        label: 'Communities'
    },
    {
        path: '/premium',
        activeIcon: PremiumActiveIcon,
        passiveIcon: PremiumPassiveIcon,
        label: 'Premium'
    }
]