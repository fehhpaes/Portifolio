'use client';

import React, { useState } from 'react';
import { Sparkles, Bot, MapPin } from 'lucide-react';
import { profileData } from '@/data/profile';

const AVATAR_SOURCES = [
  '/profile.jpeg',
  '/profile.png',
  '/profile.webp',
];

export default function BentoProfile() {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  const { personal, bio } = profileData;

  const handleImageError = () => {
    if (imgIndex < AVATAR_SOURCES.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else {
      setImgError(true);
    }
  };

  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-white/10 hover:bg-neutral-800/80 transition-colors shadow-xl group">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {personal.status}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-neutral-300 border border-white/10">
            <MapPin className="w-3 h-3 text-neutral-400" />
            {personal.location}
          </span>
        </div>

        {/* Profile Header with Avatar & Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          {!imgError ? (
            <img
              src={AVATAR_SOURCES[imgIndex]}
              alt={personal.name}
              onError={handleImageError}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-neutral-700 object-cover mb-4 md:mb-0 md:mr-6 shrink-0 shadow-md bg-neutral-800"
            />
          ) : (
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-neutral-700 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center text-xl sm:text-2xl font-bold text-white mb-4 md:mb-0 md:mr-6 shrink-0 shadow-md">
              FP
            </div>
          )}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {personal.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-neutral-400">
              {personal.role}
            </p>
          </div>
        </div>

        {/* Humanized Narrative */}
        <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
          <p>
            {bio.intro}
          </p>
          <p>
            {bio.experience}
          </p>
        </div>
      </div>

      {/* AI Pair Programming Modern Card */}
      <div className="mt-6 pt-5 border-t border-white/10 flex items-start gap-3.5 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
        <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1 flex items-center gap-1.5">
            Fluxo Moderno de Engenharia
            <Sparkles className="w-3 h-3 text-amber-400" />
          </h2>
          <p className="text-xs text-neutral-300 leading-relaxed">
            {bio.aiWorkflow}
          </p>
        </div>
      </div>
    </div>
  );
}
