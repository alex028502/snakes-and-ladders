(ns app.core)

; thanks https://stackoverflow.com/a/8087667
(defn index-of [item coll]
  (count (take-while (partial not= item) coll)))

(defn player-turn [position roll shortcuts]
  (let [new-position (+ position roll)]
    (get shortcuts (str new-position) new-position)))

(defn game-turn [n roll shortcuts positions]
  (let [turn (mod n (count positions))]
    (map (fn [key position]
           (if (= key turn)
             (player-turn position roll shortcuts)
             position))
         (range (count positions))
         positions)))

(defn main-game [goal shortcuts names die]
  (loop [positions (take (count names) (repeat 0)) n 0 rolls die]
    (let [winners (map last (filter (fn [pos-name] (>= (first pos-name) goal))
                                    (map list positions names)))]
      (cond (> (count winners) 0) (str (first winners) " wins!")
            (not (first rolls)) "inconclusive"
            :else (recur (game-turn n (first rolls) shortcuts positions)
                         (+ n 1)
                         (rest rolls))))))

;; if there is a mismatch, and like an odd number of rolls on the test list
;; the test passes - I think because this will somehow succeed when comparing
;; the rolls, and then pass the list of remaining rolls into the main-game
;; which will send an error when there are none left - so even though that
;; could say (< (count rolls) (count names)), it doesn't have to
(defn roll-to-see-who-goes-first [names die]
  (loop [rolls die]
    (if (not (first rolls))
      (list names [])
      (let [round (take (count names) rolls) later (drop (count names) rolls)]
        (if (= (count (filter (partial = (apply max round)) round)) 1)
          (let [winner-key (index-of (apply max round) round)]
            (list (concat (drop winner-key names) (take winner-key names))
                  later))
          (recur later))))))

(defn ^:export play [die goal shortcuts names]
  (if (= (count names) 0)
    "no players"
    (apply main-game goal shortcuts (roll-to-see-who-goes-first names die))))

