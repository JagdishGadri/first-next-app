'use client';
import { Callback, debounce } from '@/lib/utils';
import { QueryParams } from '@/types/common';
import { SearchIcon } from 'lucide-react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

function UserSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState<string | null>('');
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setSearchQuery(searchParams?.get(QueryParams.USER));
  }, [searchParams]);

  const searchHandler: Callback = (searchQuery: string = '') => {
    router.push(
      pathname + '?' + createQueryString(QueryParams.USER, searchQuery)
    );
  };

  const searchDebounce = debounce(searchHandler, 2000);

  return (
    <div className="p-4">
      <div className=" text-gray-400 p-1  flex gap-2 rounded-full bg-sigSurface border border-sigColorBgBorder">
        <SearchIcon className="text-gray-400 w-5" />
        <input
          className="bg-transparent border-none text-white placeholder-gray-400 focus:outline-none"
          placeholder="Search"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            searchDebounce(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default UserSearch;
