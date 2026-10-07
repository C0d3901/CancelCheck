import { useState } from "react";
import {
  Bell,
  CalendarDays,
  ChevronRight,
  CreditCard,
  LayoutDashboard,
  Lightbulb,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Wallet,
} from "lucide-react";

const subscriptions = [
  {
    name: "Netflix",
    category: "Entertainment",
    amount: 22.99,
    renewal: "2 days",
    usage: 2,
    status: "Review",
  },
  {
    name: "Spotify",
    category: "Music",
    amount: 12.99,
    renewal: "8 days",
    usage: 18,
    status: "Keep",
  },
  {
    name: "Adobe Creative Cloud",
    category: "Productivity",
    amount: 31.99,
    renewal: "13 days",
    usage: 4,
    status: "Review",
  },
  {
    name: "Notion",
    category: "Productivity",
    amount: 10,
    renewal: "21 days",
    usage: 24,
    status: "Keep",
  },
];

function App() {
  const [activePage, setActivePage] = useState("Overview");

  const monthlySpending = subscriptions.reduce(
    (total, subscription) => total + subscription.amount,
    0
  );

  const reviewCount = subscriptions.filter(
    (subscription) => subscription.status === "Review"
  ).length;

  return (
    <div>
      <h1>CancelCheck</h1>

      <p>
        Know what's renewing before it costs you.
      </p>

      <h2>Monthly recurring spending</h2>

      <h3>${monthlySpending.toFixed(2)}</h3>

      <h2>Upcoming renewals</h2>

      {subscriptions.map((subscription) => (
        <div key={subscription.name}>
          <h3>{subscription.name}</h3>

          <p>
            ${subscription.amount.toFixed(2)} · renews in{" "}
            {subscription.renewal}
          </p>

          <p>
            Used {subscription.usage} times this month
          </p>

          <strong>{subscription.status}</strong>
        </div>
      ))}

      <hr />

      <h2>AI Subscription Advisor</h2>

      <p>
        You may want to review {reviewCount} subscriptions.
      </p>

      <p>
        Your recent usage suggests that some subscriptions
        may no longer provide the same value.
      </p>
    </div>
  );
}

export default App;
