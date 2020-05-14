db.articles.aggregate(
   [
     { $match: { body: { $search: "паравоз" } } },
     { $group: { _id: null, count: { $sum: 1} } }
   ]
)