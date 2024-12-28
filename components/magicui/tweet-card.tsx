/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import {
  enrichTweet,
  type EnrichedTweet,
  type TweetProps,
  type TwitterComponents,
  Tweet as ReactTweet,
} from "react-tweet";
import { getTweet, type Tweet } from "react-tweet/api";
import { cn } from "@/lib/utils";

// First create the utility function and interfaces
interface TwitterIconProps {
  className?: string;
  [key: string]: unknown;
}

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

// Components
const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("rounded-md bg-primary/10", className)} {...props} />
  );
};

export const TweetSkeleton = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: unknown;
}) => (
  <div
    className={cn(
      "flex size-full max-h-max min-w-72 flex-col gap-2 rounded-lg border p-4",
      className,
    )}
    {...props}
  >
    <div className="flex flex-row gap-2">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <Skeleton className="h-10 w-full" />
    </div>
    <Skeleton className="h-20 w-full" />
  </div>
);

export const TweetNotFound = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: unknown;
}) => (
  <div
    className={cn(
      "flex size-full flex-col items-center justify-center gap-2 rounded-lg border p-4",
      className,
    )}
    {...props}
  >
    <h3>Tweet not found</h3>
  </div>
);

// Add this MagicTweet component
export const MagicTweet = ({
  tweet,
  components,
  ...props
}: {
  tweet: Tweet;
  components?: TwitterComponents;
} & Omit<TweetProps, "id">) => {
  const enriched = enrichTweet(tweet);
  return (
    <div className="rounded-lg">
      <ReactTweet 
        id={tweet.id_str}
        {...props}
      />
    </div>
  );
};

// Main TweetCard component
export const TweetCard = async ({
  id,
  components,
  fallback = <TweetSkeleton />,
  onError,
  ...props
}: TweetProps & {
  className?: string;
}) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        } else {
          console.error(err);
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound {...props} />;
  }

  return (
    <Suspense fallback={fallback}>
      <MagicTweet tweet={tweet} {...props} />
    </Suspense>
  );
};
